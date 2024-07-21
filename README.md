# express_47htmx

 Version: 0.9.2

 Author  : @kuc_arc_f

 date   : 2024/07/01

 update : 2024/07/21  

***

htmx + Vite + express SSR, sample

***
### stackblitz

https://stackblitz.com/~/github.com/kuc-arc-f/express_47htmx

***
### Related

https://htmx.org

***
### sample

* api_test: api sample

* turso_todo: Turso LibSQL sample

* simple_auth: auth sample

* blog: blog display sample

* zod: zod form check

***
### build

```
yarn build
#dev
yarn dev
```

***
* vercel.json
```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog

https://zenn.dev/knaka0209/scraps/2f949d60d83385

***

