# easymaven

Cli tool to simplify the dependency adding for maven projects

## Install it

Updated with number of rows and wildcard search
```
npm i -g https://github.com/rsrini7/easymaven
```

## Use it

On a maven project root folder (that contains a pom.xml file) execute

```
easymaven gson
easymaven gson*
easymaven gson* 40
```

This will add gson to your dependencies, if your pom already has gson on it's dependency, easymaven will just update this depency version
