## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Capacitor Example Project

This is a Capacitor example project that uses pmtiles to demonstrate the need to add ".pmtiles" to the supported media extensions for iOS. It adds offline support for maps and uses a custom fork of `@capacitor/ios` to include pmtiles in the supported mediaExtensions list.

### Running this example

To run the provided example, you can use `npm start` command.

```bash
npm start
```

### Custom Fork

This project uses a custom fork of `@capacitor/ios`:

```json
"@capacitor/ios": "https://gitpkg.vercel.app/m345054/capacitor/ios?fix/pmtiles-6.x"
```

You can find the fork here: [https://github.com/m345054/capacitor](https://github.com/m345054/capacitor)