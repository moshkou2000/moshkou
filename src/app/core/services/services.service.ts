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
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class Services implements IServices, OnDestroy {
  routerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private sampleService: SampleService
  ) {}

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  /* 
    Router
  */
  navigate(route: string[], data?: any): Promise<boolean> {
    const extras: NavigationExtras | undefined = data
      ? {
          state: data,
        }
      : undefined;
    return this.router.navigate(route, extras);
  }

  navigateByUrl(route: string, data?: any): Promise<boolean> {
    const extras: NavigationExtras | undefined = data
      ? {
          state: data,
        }
      : undefined;
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

  getCurrentNavigationExtras(): any | undefined {
    return this.router.getCurrentNavigation()?.extras?.state;
  }

  /* 
    UserService
  */
  login(body: any): Observable<any> {
    return this.userService.login(body);
  }

  register(body: any): Observable<any> {
    return this.userService.register(body);
  }

  verify(body: any): Observable<any> {
    return this.userService.verify(body);
  }

  confirm(body: any): Observable<any> {
    return this.userService.confirm(body);
  }

  prove(body: any): Observable<any> {
    return this.userService.prove(body);
  }

  getProfile(): Observable<any> {
    return this.userService.getProfile();
  }

  updateProfile(body: any): Observable<any> {
    return this.userService.updateProfile(body);
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
  abstract navigate(route: string[], data?: any): Promise<boolean>;
  abstract navigateByUrl(route: string, data?: any): Promise<boolean>;
  abstract navigation(args: NavigationArguments): void;
  abstract getCurrentNavigationExtras(): any | undefined;

  abstract login(body: any): Observable<any>;
  abstract register(body: any): Observable<any>;
  abstract verify(body: any): Observable<any>;
  abstract confirm(body: any): Observable<any>;
  abstract prove(body: any): Observable<any>;
  abstract getProfile(): Observable<any>;
  abstract updateProfile(body: any): Observable<any>;

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
