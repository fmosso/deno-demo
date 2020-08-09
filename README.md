# deno-demo

This repository contains 3 examples with deno: a hello-world program, a simple web server using oak, and a simple ghraphql  with oak.


In order to run a program, you can execute the following command:

```sh
deno run index.ts 
```
For the web-server and graphql application it's necessary to use the option `--allow-net`. For example:

```sh
deno run --allow-net index.ts 
```

I recommend to download the `denon` (https://deno.land/x/denon@2.3.2) plugin that restart deno after saving. Therefore, running a program would be:

```sh
denon run --allow-net index.ts 
```
