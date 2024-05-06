import{S as i,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function d(n){const r=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>{throw new Error("An error occurred while fetching data.")})}function u(n){const s=document.getElementById("gallery");s.innerHTML="",n.forEach(r=>{const t=`
      <div class="gallery">
        <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" class="card-img-top"></a>
        <div class="card-body">
          <h5 class="card-title">${r.tags}</h5>
          <p class="card-text">Likes: ${r.likes}</p>
          <p class="card-text">Views: ${r.views}</p>
          <p class="card-text">Comments: ${r.comments}</p>
          <p class="card-text">Downloads: ${r.downloads}</p>
        </div>
      </div>
    `;s.insertAdjacentHTML("beforeend",t)}),new i(".gallery")}function c(n){l.error({title:"Error",message:n})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(s){s.preventDefault();const t=document.getElementById("search-input").value.trim();t!==""?d(t).then(e=>{e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):u(e)}).catch(e=>{c("An error occurred while fetching data. Please try again later.")}):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
