# Minimize resource usage while running the app

This document explains quick steps to run the projects with lower CPU/memory use.

Tips:

- Use the lightweight start script (no dev server, minified bundle for web):

```bash
# in my-ecommerce-app-v2
cd my-ecommerce-app-v2
npm run start:light

# in my-ecommerce-app
cd my-ecommerce-app
npm run start:light
```

- Build a static web bundle and serve it locally (lowest runtime cost):

```bash
cd my-ecommerce-app-v2
npm run build:web
# then serve the web-build folder, e.g.:
npx serve web-build
```

- Disable watchers / polling on some Linux setups (reduces CPU):

```bash
export CHOKIDAR_USEPOLLING=false
```

- Limit Node process memory if needed (avoid large memory spikes):

```bash
NODE_OPTIONS=--max-old-space-size=1024 npm run start:light
```

- Stop other background dev tools (ADB, emulators, heavy editor plugins) while running.

If you want, I can run `git commit` to save these changes and/or add a short script that automatically serves the static build. Let me know which you'd prefer.