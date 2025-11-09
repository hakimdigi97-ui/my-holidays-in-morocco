async function loadBlogs(){
  try{
    const r = await fetch('./content/blogs.json', {cache:'no-store'});
    const posts = await r.json();
    const wrap = document.getElementById('blog-list');
    if(!wrap) return;
    wrap.innerHTML = posts.map(p => `
      <article class="card">
        <div class="thumb"><img src="${p.image}" alt="${p.title}"></div>
        <div class="body">
          <h3>${p.title}</h3>
          <p class="small">${p.excerpt}</p>
          <a class="small" href="contact.html">Discuss Feature →</a>
        </div>
      </article>`).join('');
  }catch(e){ console.error(e); }
}
document.addEventListener('DOMContentLoaded', loadBlogs);
