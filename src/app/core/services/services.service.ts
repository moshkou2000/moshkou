import { Injectable, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import {
  NavigationEnd,
  NavigationError,
  NavigationExtras,
  Router,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
  GetArguments,
  NavigationArguments,
  SidenavArguments,
} from '../arguments/arguments';
import { SampleService } from './sample/sample.service';
import { UserService } from './user/user.service';
import { ScreenModel } from '../models/screen.model';
import { ScreenService } from './screen/screen.service';
import { SidenavService } from './sidenav/sidenav.service';
import { InfoSidenavService } from './infp-sidenav/info-sidenav.service';

@Injectable({
  providedIn: 'root',
})
export class Services implements IServices, OnDestroy {
  routerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private location: Location,
    private screenService: ScreenService,
    private sidenavService: SidenavService,
    private infoSidenavService: InfoSidenavService,
    private userService: UserService,
    private sampleService: SampleService
  ) {}

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  /* 
    Screen
  */
  setScreen(screen: ScreenModel): void {
    this.screenService.set(screen);
  }
  getScreen(): Observable<ScreenModel> {
    return this.screenService.get();
  }
  getScreenSize(): ScreenModel {
    return this.screenService.getSize();
  }

  /* 
    Sidenav & Info sidenav
  */
  setSidenav(flag?: boolean): void {
    this.sidenavService.set(flag);
  }
  getSidenav(): Observable<boolean> {
    return this.sidenavService.get();
  }
  setInfoSidenav(args?: SidenavArguments): void {
    this.infoSidenavService.set(args);
  }
  getInfoSidenav(): Observable<SidenavArguments> {
    return this.infoSidenavService.get();
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

  // It will basically change the url, without change in route of application
  go(route: string): void {
    this.location.go(route);
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
  abstract setScreen(screen: ScreenModel): void;
  abstract getScreen(): Observable<ScreenModel>;
  abstract getScreenSize(): ScreenModel;

  abstract setSidenav(flag?: boolean): void;
  abstract getSidenav(): Observable<boolean>;
  abstract setInfoSidenav(args?: SidenavArguments): void;
  abstract getInfoSidenav(): Observable<SidenavArguments>;

  abstract navigate(route: string[], data?: any): Promise<boolean>;
  abstract navigateByUrl(route: string, data?: any): Promise<boolean>;
  abstract go(route: string): void;
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
