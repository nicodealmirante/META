const { createBot, createProvider, createFlow, addKeyword, EVENTS, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const { readFileSync } = require("fs");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const fs = require("fs")
let nombre;
let motivo;  
  function numero(nnum){
let nuevoContenido = `\n${nnum};`;

  fs.appendFile('numeros.txt', nuevoContenido, function(error){
      if(error){
          console.log(`Error: ${error}`);
      } else {
          console.log('Se ha agregado nuevo contenido al archivo javascript.txt.');
      }
  })}
  const SPAM = addKeyword(["SPAM"],{sensitive:true})
 .addAction(async (ctx,{provider,gotoFlow,fallBack}) =>{
     const array = fs.readFileSync('numeros.txt').toString().split("\n");
     const refProvider = await provider.getInstance();
     array.forEach(element => {
     
      
          console.log(element)
           provider.getInstance().sendMessage(jid,{text: "assd"})

     


     delay(3000);
   
 }
 )}
)


      

const Cliente = addKeyword(["AGEN-TE"],{sensitive:true})

  
        .addAnswer(
          "Tiene alguna consulta? En que horario podria llamarlo?"
         , {capture:true, delay:5000}, async (ctx ,{endFlow,provider}) => {
                  if(ctx.body == "SM" || ctx.body == "Sm" || ctx.body == "sm"){
return endFlow(flowPrincipal)
      } 

            const refProvider = await provider.getInstance();
const mywhatsa = "5491140054474@s.whatsapp.net";
 refProvider.sendMessage(mywhatsa, {text:
           `*${motivo}*
         Numero: +${ctx.from}
         Nombre: *${nombre}*
    
             INFO: \n*${ctx.body}*`}) 
             
    // say hello to everyone on the group
   })
         .addAnswer("Buenisimo, A la brevedad me estare comunicando con usted. Tambien puede enviarme a mi numero personal 11-4005-4474. Muchisimas Gracias. Quedo a sus ordenes"
         , {capture:true, delay:5000}, async (ctx ,{gotoFlow,fallBack,provider}) => {
          const refProvider = await provider.getInstance();
          if(ctx.body == "SM" ||ctx.body == "Sm" || ctx.body == "sm"){
          return gotoFlow(Menuflow)}
            delay(1000)
          const mywhatsa = "5491140054474@s.whatsapp.net";
          refProvider.sendMessage(mywhatsa, {text:
          `SIG MSJ
          Numero: +${ctx.from}
          INFO: 
          *${ctx.body}*`}) 
    // say hello to everyone on the group   

console.log("Ejecuto return close")

      return fallBack("Gracias por comunicarse con nosotros. Escriba *SM* para volver al menu inicial")
  }) 

const audiono = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('Disculpe, no puedo escuchar audios. Por favor utilice solo texto.')


const flowsAlquiler = addKeyword(['//alqu-iler//'], {sensitive: true})


.addAnswer('👌Te envio la info de alquiler.',{delay:3000})
  
    .addAnswer('Selfie Mirror',{
      media: 'banner22.jpg', delay: 3000} )
.addAnswer([
'*Espejo Magico Selfie Mirror*',
'\nDiseño elegante: Nuestro espejo mágico tiene un diseño moderno y elegante que se adapta a cualquier tipo de evento.',
'Su apariencia sofisticada agrega un toque especial al ambiente.',
'\nAccesorios y decoración: Contamos con una variedad de accesorios y elementos decorativos para personalizar aún ',
'más la experiencia. Puedes elegir entre diferentes marcos, sombreros, anteojos, pizarras con mensajes divertidos' ,
'y más. Estos elementos permiten que los invitados se diviertan y creen fotos únicas.',
'\nTamaño y portabilidad: El espejo mágico tiene dimensiones compactas que facilitan su transporte e instalación en ',
'diferentes espacios. Es lo suficientemente versátil como para adaptarse a salones de eventos, fiestas en exteriores ',
'y otros lugares.',
'\nOpciones de software: Nuestro espejo mágico viene con un software propio que ofrece una amplia gama de funciones ',
'y personalización. Puedes elegir entre diferentes plantillas de diseño, agregar efectos especiales a las fotos y configurar ',
'opciones de impresión según tus preferencias.',
'\nTiempo de alquiler: El tiempo de alquiler del espejo mágico es flexible y se adapta a las necesidades de tu evento.',
' Puedes contratarlo por horas o por el tiempo que consideres necesario para brindar una experiencia completa a tus invitados.',
'\nRecuerda que nuestros servicios incluyen el montaje, desmontaje y la asistencia de personal capacitado durante todo' ,
'el evento. Estamos comprometidos en asegurar que tus invitados disfruten al máximo de la experiencia con el espejo mágico.',
'Valor Servicio por 2 Horas $ 75.000 (base)',
'El valor de la Hora adicional es de $ 35.000'],{delay: 3000})
.addAnswer('Espejo Magico Selfie Mirror',{
media: 'banner3.jpg',delay:3000}) 
.addAnswer([
'*360 Super Slow.*',
'\nEl servicio dura 2 horas. Durante ese tiempo no existe limite de caputras.',
'Los videos son filmados y compartidos en el momento ya editados automaticamente',
'Incluye accesorios (pelucas, pistola lanza burbujas, cotillon)',
'El valor del servico de 2 horas es de $ 75.000', 
'El valor de la Hora adicional es de $ 35.000 '],{delay:3000}
)
.addAnswer('Plataforma 360 Super Slow',{
media: 'banner.jpg', }) 
.addAnswer([
 '🔒Los valores se congelan y la fecha se reseva solo al señar el servicio (2023)', 
 '🚚El valor no incluye traslados',
 '🚩*Servicio disponible para todo el pais.* Contamos con representantes en todas las provincias'])
 .addAction(async (ctx,{provider,gotoFlow}) =>{
    motivo="Alquiler"
    fecha="ES ALQUILER"
  const jid = ctx.key.remoteJid 
 await provider.getInstance().sendMessage(jid,{video: readFileSync("video.mp4"),
                  caption: "Showroom",
                gifPlayback: true
    })     
  
    await provider.getInstance().sendMessage(jid,{video: readFileSync("video2.mp4"),
   caption: "Selfie Mirror",
  gifPlayback: true
  })
  



await gotoFlow(Cliente)
  })

      

    
const flowVenta = addKeyword(['VE-NTA'],{sensitive: true})
.addAnswer(
'👌 Te envio la info de Venta.',{capture:false}, async (ctx,{provider, gotoFlow}) => {
numero(ctx.from)})
.addAnswer(['*Espejo Magico Selfie Mirror*',
'\nEl Espejo Mágico de Selfie Mirror cuenta con una cámara web de alta calidad, vidrio templado resistente, una Mini PC y un',
'televisor LED de 32 pulgadas. Estas características garantizan una experiencia de alta definición para capturar momentos',
' especiales.',
'\nSu diseño compacto y portátil, con dimensiones de 126 cm de alto x 70 cm de ancho y 20 cm de profundidad en el modelo',
' Slim, permite transportarlo fácilmente en cualquier vehículo. Esto brinda una gran versatilidad y conveniencia para eventos ',
 'y fiestas.'])
 .addAnswer('Plataforma 360 Super Slow',{
  media: 'banner.jpg', delay:5000 }) 
  .addAnswer(['La facilidad de uso es una de las ventajas clave del Espejo Mágico. Simplemente tienes que enchufarlo y presionar el ',
'botón de encendido para que empiece a funcionar. Esto agiliza la instalación y permite que los eventos comiencen rápidamente.',
'\nEs importante mencionar que el Selfie Mirror no incluye una impresora, pero está preparado para funcionar con cualquier ',
'impresora que se adapte a las necesidades del cliente. Esto brinda flexibilidad para elegir la impresora que mejor se ajuste a', 
'los requerimientos de impresión.',
'\nEn cuanto al precio, el valor del equipo es de 1500 dólares o pesos al valor del dólar blue del día.',
])
.addAnswer('Equipo Slim Selfie Mirror',{
media: 'banner4.jpg', delay:5000})
.addAnswer(['*Plataforma 360 Super Slow*',
 '\nLa plataforma incluye motor, control remoto, variador de velocidad, soporte para celular o Gopro y Aro de Led',
  'El Valor en 70 o 90 cm es de $250.000',
 'El valor en 110 cm es de $280.000'])

 .addAnswer([
 'Formas de pago efectivo, transferencia/deposito',
 '\nCotizacion del dolar Blue - Venta',
])
  
  .addAnswer('Selfie Mirror',{
  media: 'banner22.jpg', delay:3000})
.addAnswer(
 '✈️*Enviamos a todo el Pais.*')
 .addAnswer('Espejo Magico', {
media: 'banner3.jpg'})
.addAction(async (ctx,{provider,gotoFlow}) =>{
  const jid = ctx.key.remoteJid
  motivo="VENTA"
  await provider.getInstance().sendMessage(jid,{video: readFileSync("video2.mp4"),
 caption: "Selfie Mirror",
gifPlayback: true
})
  
await provider.getInstance().sendMessage(jid,{video: readFileSync("video.mp4"),
                  caption: "Showroom",
                gifPlayback: true
              })
              await provider.getInstance().sendMessage(jid,{video: readFileSync("video3.mp4"),
              caption: "Slim",
            gifPlayback: true
          })


        await delay(3000);
        gotoFlow(Cliente)

  })



  
const flowPrincipal = addKeyword(EVENTS.WELCOME)

  .addAnswer("Hola, Gracias por comunicarse con Selfie Mirror. Esta es una linea de respuestas automaticas. Responda con el numero indice para continuar o continue al\n +5491140054474 - Nicolas",{capture:false}, async (ctx,{provider, gotoFlow}) => {
nombre='no'
  const sock = await provider.getInstance();
  const msgPoll = {
    sticker: {
      url:
      "sticker.webp"
    }
  }
await gotoFlow(Menuflow)
})
 const Menuflow = addKeyword(["me-nu"],{sensitive:true})
  .addAnswer("*MENU*\n*1* - Info de Alquiler \n*2* - Info de Venta \n*3* - Hablar con un asesor \n*4* - Showroom \n*5* - Horarios \n*6* - Pagina Web\n\n*0* - MODALIDAD SOCIOS", {capture:true, delay:2000}, async (ctx,{fallBack,gotoFlow,provider}) => {
     if(ctx.body=='1'){
gotoFlow(flowsAlquiler)
     }
    else
    if(ctx.body=='2'){
        
   gotoFlow(flowVenta)
}
else
if(ctx.body=='3'){
        nombre="Cliente"
      gotoFlow( Cliente)
    }
    else
    if(ctx.body=='4'){
                nombre="Ubicacion"
                const sock = await provider.getInstance();
                await sock.sendMessage(
                ctx.key.remoteJid, 
                    { location: { degreesLatitude: -34.65693027316358, degreesLongitude: -58.56245348955204 }
                }),  
                
                await delay(1000),
                   
                 await sock.sendMessage(ctx.key.remoteJid, { text: '*Av de Mayo 1624  - RAMOS MEJIA - Buenos Aires*' }),
                 await sock.sendMessage(ctx.key.remoteJid,{video: readFileSync("video.mp4"),
                  caption: "Showroom",
                gifPlayback: true
              })                ,

             gotoFlow(Menuflow)
            }
              
              else
              if(ctx.body=='5'){
                const sock = await provider.getInstance();
                await sock.sendMessage(ctx.key.remoteJid, { text: 'Nuestros horarios de atencion son: de Lunes a Viernes de 10hs a 17hs' })
gotoFlow(Menuflow)  
          
          }
              else
              if(ctx.body=='6'){

                const sock = await provider.getInstance();
                              await sock.sendMessage(ctx.key.remoteJid, { text: 'WEB: https://espejoselfiemirror.com.ar' })
        gotoFlow(Menuflow)        
              } else    
               if(ctx.body=='0'){

                const sock = await provider.getInstance();
                              await sock.sendMessage(ctx.key.remoteJid, { text: 'A todos los clientes compradores de Selfie Mirror, Los invitamos a participar de la nueva modalidad SOCIOS ... '},  
                              ),
                              await sock.sendMessage(ctx.key.remoteJid, { text: 'WEB: https://espejoselfiemirror.com.ar\n\nDe que se trata?\nDebido a la gran demanda del servicio, estafas, y lamentable servicio brindado por muchos proveedores tomamos la decision de calificar y recomendar a quienes brinden un buen servicio, ademas podran aprobechar nuestras campañas de publicidad constantes a nivel nacional. \n\n Tambien dispondras de un subdominio tipo representante.selfiemirror.com.ar, este mostrara el servicio que cada uno brinde. \n\n Envia un mensaje al asesor para participar' }
                             
                          ,   delay(1000)
                              , gotoFlow(Menuflow)  ) } 
              else 
                {
  return fallBack({body: 'Esta respuesta es automatica y solo acepta una respuesta numerica. Responda 1 para *Alquiler*, 2 para *Venta* o 3 para derivarlo a un *Asesor*. Gracias'})
  }},
[flowVenta, flowsAlquiler,Cliente])


const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowVenta,flowsAlquiler,Cliente,Menuflow, audiono, SPAM])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
    