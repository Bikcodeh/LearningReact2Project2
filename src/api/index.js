export const apiGet = (url) => () => fetch(url).then(r => r.json());

export const apiPut = (url, id, obj) => () => 
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: new Headers({ 'content-type':'application/json'}) 
    }).then(v => v.json())