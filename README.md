# houdini-sentry-repro

Reproduction for https://discord.com/channels/1024421016405016718/1404892502732832829

With houdini installed:
<img width="2098" height="1213" alt="image" src="https://github.com/user-attachments/assets/66bfaf61-d927-49f9-ae67-1e9419836cfe" />

```
[plugin:vite:esbuild] Transform failed with 2 errors:
/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts:12:13: ERROR: Multiple exports with the same name "load"
/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts:12:13: ERROR: The symbol "load" has already been declared

/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts:12:13

[33mMultiple exports with the same name "load"[39m
10 |  }
11 |  
12 |  export const load = userModule.load ? wrapServerLoadWithSentry(userModule.load) : undefined;
   |               ^
13 |  export * from "/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts?sentry-auto-wrap";

[33mThe symbol "load" has already been declared[39m
10 |  }
11 |  
12 |  export const load = userModule.load ? wrapServerLoadWithSentry(userModule.load) : undefined;
   |               ^
13 |  export * from "/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts?sentry-auto-wrap";

Error: Transform failed with 2 errors:
/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts:12:13: ERROR: Multiple exports with the same name "load"
/home/artud/dev/tmp/houdini-sentry-repro/src/routes/+layout.server.ts:12:13: ERROR: The symbol "load" has already been declared
    at failureErrorWithLog (/home/artud/dev/tmp/houdini-sentry-repro/node_modules/.pnpm/esbuild@0.25.9/node_modules/esbuild/lib/main.js:1467:15)
    at /home/artud/dev/tmp/houdini-sentry-repro/node_modules/.pnpm/esbuild@0.25.9/node_modules/esbuild/lib/main.js:736:50
    at responseCallbacks.<computed> (/home/artud/dev/tmp/houdini-sentry-repro/node_modules/.pnpm/esbuild@0.25.9/node_modules/esbuild/lib/main.js:603:9)
    at handleIncomingPacket (/home/artud/dev/tmp/houdini-sentry-repro/node_modules/.pnpm/esbuild@0.25.9/node_modules/esbuild/lib/main.js:658:12)
    at Socket.readFromStdout (/home/artud/dev/tmp/houdini-sentry-repro/node_modules/.pnpm/esbuild@0.25.9/node_modules/esbuild/lib/main.js:581:7)
    at Socket.emit (node:events:518:28)
    at addChunk (node:internal/streams/readable:561:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
    at Readable.push (node:internal/streams/readable:392:5)
    at Pipe.onStreamRead (node:internal/stream_base_commons:189:23
```

Without houdini:
<img width="1381" height="803" alt="image" src="https://github.com/user-attachments/assets/1898d6e7-4ad6-48a9-a845-90401da4b980" />
