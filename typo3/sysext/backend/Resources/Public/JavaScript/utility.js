/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
class Utility{static trimExplode(t,e){return e.split(t).map((t=>t.trim())).filter((t=>""!==t))}static trimItems(t){return t.map((t=>t instanceof String?t.trim():t))}static intExplode(t,e,r=!1){return e.split(t).map((t=>parseInt(t,10))).filter((t=>!isNaN(t)||r&&0===t))}static isNumber(t){return!isNaN(parseFloat(t.toString()))&&isFinite(t)}static convertFormToObject(t){const e={};return t.querySelectorAll("input, select, textarea").forEach((t=>{const r=t.name,i=t.value;if(r)if("input"===t.tagName.toLowerCase()&&"checkbox"==t.type){const a=t;void 0===e[r]&&(e[r]=[]),a.checked&&e[r].push(i)}else e[r]=i})),e}static mergeDeep(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,r)=>(Object.keys(r).forEach((i=>{const a=t[i],n=r[i];Array.isArray(a)&&Array.isArray(n)?t[i]=a.concat(...n):e(a)&&e(n)?t[i]=Utility.mergeDeep(a,n):t[i]=n})),t)),{})}static urlsPointToSameServerSideResource(t,e){if(!t||!e)return!1;const r=window.location.origin;try{const i=new URL(t,Utility.isValidUrl(t)?void 0:r),a=new URL(e,Utility.isValidUrl(e)?void 0:r),n=i.origin+i.pathname+i.search;return n===a.origin+a.pathname+a.search}catch{return!1}}static isValidUrl(t){try{return new URL(t),!0}catch{return!1}}}export default Utility;