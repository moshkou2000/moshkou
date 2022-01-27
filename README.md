# Moshkou

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation

npm install -g @compodoc/compodoc

# Project Settings

## fixed table column size

app > shared > components > datatable > datatable.component.scss

## Default Angular Breakpoints

- xs: begin: 0, end: 599.9px
- sm: begin: 600px, end: 959.9px
- sm: begin: 720px, end: 959.9px
- md: begin: 960px, end: 1279.9px
- lg: begin: 1280px, end: 1919.9px
- xl: begin: 1920px, end: 4999.99px

### sample

@media only screen and (max-width: 720px) {
.sample {
display: block;
}
}

## UI design

The main navigation in app is eighter `sidenav` or `mainnav`. Defaul theme has `sidenav` onless we set `hasMainnav: true` in `APP_ROUTES`.

https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes&date_picker_type=flexible_dates&search_mode=flex_destinations_search&search_type=AUTOSUGGEST

# TODO

## nav directive

✅ create directive for navigation, `siddenav` & `mannav`

## theme

- ✅ Primary and secondary colors
- ✅ Variants of primary and secondary colors
- ⬜️ Additional UI colors, such as colors for backgrounds, surfaces, errors, typography, and iconography.

### read more

- https://material.io/design/color/the-color-system.html#color-theme-creation
- https://material.io/design/color/the-color-system.html#tools-for-picking-colors
- https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=1c39bb

## localization

⬜️ adding localization

## typography

⬜️ implimenting typography

## sample usage of sidenav-info

⬜️ adding sample usage of sidenav-info in any component

## sample usage of hasBack or remove it

⬜️ adding sample usage of back button design in moblie view
⬜️ using css / ts

## ACL

```
  tocken : {
    roles: [],
    modules: [{
        id: string,
        name: string,
        view: boolean,
        update: boolean,
        create: boolean,
        delete: boolean,
    }]}
```
