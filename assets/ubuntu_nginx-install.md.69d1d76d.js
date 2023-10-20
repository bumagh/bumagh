import{_ as e,o as n,c as t,Q as i}from"./chunks/framework.bf7c2cc3.js";const x=JSON.parse('{"title":"install nginx","description":"","frontmatter":{},"headers":[],"relativePath":"ubuntu/nginx-install.md","filePath":"ubuntu/nginx-install.md"}'),r={name:"ubuntu/nginx-install.md"},o=i(`<h1 id="install-nginx" tabindex="-1">install nginx <a class="header-anchor" href="#install-nginx" aria-label="Permalink to &quot;install nginx&quot;">​</a></h1><p><a href="http://nginx.org/en/linux_packages.html#Ubuntu" target="_blank" rel="noreferrer">http://nginx.org/en/linux_packages.html#Ubuntu</a> Install the prerequisites:</p><pre><code>sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
</code></pre><p>Import an official nginx signing key so apt could verify the packages authenticity. Fetch the key:</p><pre><code>curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null
</code></pre><p>Verify that the downloaded file contains the proper key:</p><pre><code>gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
</code></pre><p>The output should contain the full fingerprint 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 as follows:</p><pre><code>pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key &lt;signing-key@nginx.com&gt;
</code></pre><p>If the fingerprint is different, remove the file.</p><p>To set up the apt repository for stable nginx packages, run the following command:</p><pre><code>echo &quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\
http://nginx.org/packages/ubuntu \`lsb_release -cs\` nginx&quot; \\
    | sudo tee /etc/apt/sources.list.d/nginx.list
</code></pre><p>If you would like to use mainline nginx packages, run the following command instead:</p><pre><code>echo &quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\
http://nginx.org/packages/mainline/ubuntu \`lsb_release -cs\` nginx&quot; \\
    | sudo tee /etc/apt/sources.list.d/nginx.list
</code></pre><p>Set up repository pinning to prefer our packages over distribution-provided ones:</p><pre><code>echo -e &quot;Package: *\\nPin: origin nginx.org\\nPin: release o=nginx\\nPin-Priority: 900\\n&quot; \\
    | sudo tee /etc/apt/preferences.d/99nginx
</code></pre><p>To install nginx, run the following commands:</p><pre><code>sudo apt update
sudo apt install nginx
</code></pre>`,18),s=[o];function a(p,g,l,c,u,d){return n(),t("div",null,s)}const _=e(r,[["render",a]]);export{x as __pageData,_ as default};
