import{S as i,i as l}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function d(s){const t=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error("An error occurred while fetching data.")})}function u(s){const n=document.getElementById("gallery");n.innerHTML="",s.forEach(t=>{const r=`
      <div class="gallery">
        <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" class="card-img-top"></a>
        <div class="card-body">
          <p class="card-text">Likes: ${t.likes}</p>
          <p class="card-text">Views: ${t.views}</p>
          <p class="card-text">Comments: ${t.comments}</p>
          <p class="card-text">Downloads: ${t.downloads}</p>
        </div>
      </div>
    `;n.insertAdjacentHTML("beforeend",r)}),new i(".gallery")}function c(s){l.error({title:"Error",message:s})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(n){n.preventDefault();const r=document.getElementById("search-input").value.trim();r!==""?d(r).then(e=>{e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):u(e)}).catch(e=>{c("An error occurred while fetching data. Please try again later.")}):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
