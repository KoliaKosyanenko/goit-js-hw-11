import{S as i,i as d}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function u(t){const s=`https://pixabay.com/api/?key=43687048-bb18a09d847445a540140347b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e.hits).catch(e=>{throw new Error("An error occurred while fetching data.")})}const p=new i(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){const n=document.querySelector(".gallery"),s=t.map(e=>`
      <li class="gallery-container">
        <a href="${e.largeImageURL}" title="${e.tags}">
          <img src="${e.webformatURL}" alt="${e.tags}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${e.likes}</p>
          <p class="card-text"><span>Views:</span> ${e.views}</p>
          <p class="card-text"><span>Comments:</span> ${e.comments}</p>
          <p class="card-text"><span>Downloads:</span> ${e.downloads}</p>
        </div>
      </li>
    `);n.insertAdjacentHTML("beforeend",s.join("")),p.refresh()}function h(){const t=document.querySelector(".gallery");t.innerHTML=""}function y(){const t=document.querySelector(".loader");t.style.display="block"}function l(){const t=document.querySelector(".loader");t.style.display="none"}function c(t){d.error({title:"Error",message:t})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("search-form").addEventListener("submit",function(n){n.preventDefault(),h();const e=document.getElementById("search-input").value.trim();e!==""?(y(),u(e).then(r=>{l(),r.length===0?c("Sorry, there are no images matching your search query. Please try again!"):f(r)}).catch(r=>{l(),c("An error occurred while fetching data. Please try again later.")})):c("Please enter a search query.")})});
//# sourceMappingURL=commonHelpers.js.map
