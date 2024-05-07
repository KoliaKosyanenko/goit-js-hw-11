import{S as i,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(n){const s=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error("An error occurred while fetching data.")})}function u(n){const o=document.querySelector(".gallery");o.innerHTML="",n.forEach(r=>{const e=`
      <li class="gallery-container">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${r.likes}</p>
          <p class="card-text"><span>Views:</span> ${r.views}</p>
          <p class="card-text"><span>Comments:</span> ${r.comments}</p>
          <p class="card-text"><span>Downloads:</span> ${r.downloads}</p>
        </div>
      </li>
    `;o.insertAdjacentHTML("beforeend",e)}),new i(".gallery").refresh()}function c(n){l.error({title:"Error",message:n})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(o){o.preventDefault();const r=document.getElementById("search-input").value.trim();r!==""?d(r).then(e=>{e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):u(e)}).catch(e=>{c("An error occurred while fetching data. Please try again later.")}):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
