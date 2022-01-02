import { Injectable, OnDestroy } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationExtras,
  Router,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GetArguments, NavigationArguments } from '../arguments/arguments';
import { SampleService } from './sample/sample.service';

@Injectable({
  providedIn: 'root',
})
export class Services implements IServices, OnDestroy {
  routerSubscription: Subscription | undefined;

  constructor(private sampleService: SampleService, private router: Router) {}

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /* 
    Router
  */
  navigate(
    route: string[],
    extras?: NavigationExtras | undefined
  ): Promise<boolean> {
    return this.router.navigate(route, extras);
  }

  navigateByUrl(
    route: string,
    extras?: NavigationExtras | undefined
  ): Promise<boolean> {
    return this.router.navigateByUrl(route, extras);
  }

  navigation(args: NavigationArguments): void {
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (args.navigationEnd) args.navigationEnd(event);
      } else if (event instanceof NavigationError) {
        if (args.navigationError) args.navigationError(event);
      }
    });
  }

  /* 
    SampleService
  */
  postSample(body: any): Observable<any> {
    return this.sampleService.post(body);
  }

  getSample(): Observable<any> {
    return this.sampleService.get({
      filter: 'nothing',
    });
  }

  putSample(id: string, body: any): Observable<any> {
    return this.sampleService.put(id, body);
  }

  deleteSample(id: string): Observable<any> {
    return this.sampleService.delete(id);
  }
}

export abstract class IServices {
  abstract navigate(
    route: string[],
    extras?: NavigationExtras | undefined
  ): Promise<boolean>;
  abstract navigateByUrl(
    route: string,
    extras?: NavigationExtras | undefined
  ): Promise<boolean>;
  abstract navigation(args: NavigationArguments): void;

  abstract postSample(body: any): Observable<any>;
  abstract getSample(arg: GetArguments): Observable<any>;
  abstract putSample(id: string, body: any): Observable<any>;
  abstract deleteSample(id: string): Observable<any>;
}

/*
  in tocken :
  1. roles
  2. modules[{
    id: '',
    name: '',
    view: boolean,
    edit: boolean,
  }]
  */
