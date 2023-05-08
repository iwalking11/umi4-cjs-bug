# umi4-cjs-bug
umi4使用cjs.js解析异常

# 复现步骤：
```
pnpm i
pnpm dev
```

# 说明
引入@aliyun-sls/web-track-browser包
该包的package.json配置如下：
<img width="965" alt="image" src="https://user-images.githubusercontent.com/14257970/236763352-292bb194-e31c-46dc-811d-8891c288309a.png">


项目中通过esm方式引用该包
```
import SlsTracker from "@aliyun-sls/web-track-browser";
```


项目启动后浏览器报错：
<img width="782" alt="image" src="https://user-images.githubusercontent.com/14257970/236762749-3027be52-670e-49a4-a857-bd33109d0a69.png">


<!-- 删除package.json中的type='module'可以正常访问。-->


原则上，.cjs.js后缀的文件应该按照commonjs的规则解析，但是这里被type='modlue'的优先级覆盖了，按照esm解析了

