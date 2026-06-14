import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';
import { NavServiceService } from './nav-service.service';

/**
 * Sends pageview / section-view events to Google Analytics (gtag.js, loaded in index.html).
 *
 * This is a single-page app with one route, so router navigation fires only on the
 * initial load. The meaningful "navigation" signal is the user scrolling between the
 * named sections (Offer, About, Projects, ...), tracked via NavServiceService.
 *
 * All gtag access is guarded so it's a no-op during SSR and when gtag failed to load
 * (e.g. blocked by an ad-blocker).
 */
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private get gtag(): Window['gtag'] | undefined {
    if (!isPlatformBrowser(this.platformId)) return undefined;
    return window.gtag;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private navService: NavServiceService
  ) {}

  /** Call once on app start (from AppComponent) to begin tracking. */
  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Future-proofing: if real routes are added later, each navigation is tracked.
    // With the current single route this fires once on load (alongside gtag's own
    // automatic initial pageview), so we send it as the canonical page_view.
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.pageView(e.urlAfterRedirects));

    // Section scroll tracking: fire a page_view whenever the active section changes.
    this.navService.currentAnchor$
      .pipe(
        filter(anchor => !!anchor),
        distinctUntilChanged()
      )
      .subscribe(anchor => {
        const section = anchor!.getText()?.trim() || 'Section';
        this.pageView('/#' + section, section);
      });
  }

  /** Send a GA4 page_view. */
  pageView(path: string, title?: string): void {
    this.gtag?.('event', 'page_view', {
      page_path: path,
      page_location: this.locationFor(path),
      ...(title ? { page_title: title } : {})
    });
  }

  /** Send an arbitrary GA4 event. */
  event(name: string, params: Record<string, any> = {}): void {
    this.gtag?.('event', name, params);
  }

  private locationFor(path: string): string {
    if (!isPlatformBrowser(this.platformId)) return path;
    return window.location.origin + (path.startsWith('/') ? path : '/' + path);
  }
}
