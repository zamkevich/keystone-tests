# Config for test Content field


## Prepare keystone fork project 
1. Download Keystone fork package https://github.com/zamkevich/keystone
2. Extract & open
3. Switch to brunch ```git checkout content-field-focus-bug```
4. Open content field folder ```cd packages/field-content```
5. Install packages: ```yarn install```

## Prepare & run keystone-tests project 
1. Go back to the keystone-tests project
2. In index.js on line 15 change path to Content field folder to a path that you download above
3. Install packages: ```yarn install```
4. Run project ```yarn dev```