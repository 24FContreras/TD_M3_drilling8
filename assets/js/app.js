console.log("🟢 Connected!");

let sitio = {
  nombre: "ecamp",
};

let handlerSitio = {
  get: function (objeto, propiedad) {
    console.log(`GET ${propiedad}`);

    return propiedad in objeto
      ? Reflect.get(sitio, propiedad)
      : "la propiedad no existe";
  },

  set: function (objeto, propiedad, valor) {
    console.log(`SET ${propiedad}=${valor}`);

    Reflect.set(objeto, propiedad, valor);
    return true;
  },
};

let sitioProxy = new Proxy(sitio, handlerSitio);
