import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function f(t){const s=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error("An error occurred while fetching data.")})}function p(t){const n=document.querySelector(".gallery");n.innerHTML="",t.forEach(r=>{const e=`
      <li class="gallery-container">
        <a href="${r.largeImageURL}" title="${r.tags}">
          <img src="${r.webformatURL}" alt="${r.tags}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${r.likes}</p>
          <p class="card-text"><span>Views:</span> ${r.views}</p>
          <p class="card-text"><span>Comments:</span> ${r.comments}</p>
          <p class="card-text"><span>Downloads:</span> ${r.downloads}</p>
        </div>
      </li>
    `;n.insertAdjacentHTML("beforeend",e)}),new d(".gallery a").refresh(),i()}function l(){const t=document.querySelector(".loader");t.style.display="block"}function i(){const t=document.querySelector(".loader");t.style.display="none"}const h=document.getElementById("search-form");h.addEventListener("submit",()=>{l()});function c(t){u.error({title:"Error",message:t})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(n){n.preventDefault();const r=document.getElementById("search-input").value.trim();r!==""?(l(),f(r).then(e=>{i(),e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):p(e)}).catch(e=>{i(),c("An error occurred while fetching data. Please try again later.")})):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
