# express_47htmx

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/07/01

 update :

***

htmx + express SSR, sample

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

***

