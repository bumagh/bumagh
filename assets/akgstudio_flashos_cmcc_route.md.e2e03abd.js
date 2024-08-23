import{_ as e,o as t,c as a,Q as n}from"./chunks/framework.1c8de9a3.js";const m=JSON.parse('{"title":"user admin","description":"","frontmatter":{},"headers":[],"relativePath":"akgstudio/flashos/cmcc_route.md","filePath":"akgstudio/flashos/cmcc_route.md"}'),r={name:"akgstudio/flashos/cmcc_route.md"},o=n(`<h1 id="user-admin" tabindex="-1">user admin <a class="header-anchor" href="#user-admin" aria-label="Permalink to &quot;user admin&quot;">​</a></h1><p>CMCCAdmin CMCCAdminK7%g^Mvp</p><h1 id="移动友华pt924光猫获取超级用户方法" tabindex="-1">移动友华PT924光猫获取超级用户方法 <a class="header-anchor" href="#移动友华pt924光猫获取超级用户方法" aria-label="Permalink to &quot;移动友华PT924光猫获取超级用户方法&quot;">​</a></h1><p>Xshiny</p><p>于 2021-08-17 22:09:01 发布</p><p>阅读量1.5w 收藏 21</p><p>点赞数 5 文章标签： 经验分享 版权 一、电脑有线或无线连接到PT924，用光猫背后的User用户登陆。</p><p>二、在登陆后的浏览器地址栏输入：</p><p><a href="http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi%EF%BC%8C" target="_blank" rel="noreferrer">http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi，</a></p><p>返回200OK信息，成功开启Telnet服务。</p><p>三、打开电脑命令提示符界面（CMD），输入Telnet，</p><pre><code>    用户名为yhtcAdmin，密码为Cm1@YHfw

    成功登陆后，在#号依次输入：

            #cd /usr/local/ct

            #vi lastgood.xml

            然后查找用户和密码，在vi中，

                            先输入“:”，进入命令模式，

                            然后输入“/SUSER_PASSWORD”，查找密码。

            如成功，则会看到



            这就是超级用户名和密码了，记录下来。

            注，退出VI方法，输入“:&quot;号进入命令模式，接着输入“q!&quot;，回车即可退出。
</code></pre><p>四、然后在浏览器中，输入<a href="http://192.168.1.1" target="_blank" rel="noreferrer">http://192.168.1.1</a>，用以上查到的信息可以进入超级用户模式了。</p><p>五、随后，您就可以根据自己需要改光猫为桥接模式了。</p><p>感谢<a href="https://blog.csdn.net/gsls200808/article/details/106307953%E6%8F%90%E4%BE%9B%E7%9A%84telnet%E5%BC%80%E5%90%AF%E4%BF%A1%E6%81%AF%E3%80%82" target="_blank" rel="noreferrer">https://blog.csdn.net/gsls200808/article/details/106307953提供的telnet开启信息。</a></p>`,15),s=[o];function c(i,p,d,l,_,h){return t(),a("div",null,s)}const f=e(r,[["render",c]]);export{m as __pageData,f as default};
