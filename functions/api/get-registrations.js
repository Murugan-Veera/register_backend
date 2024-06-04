// functions/api/get-registrations.js


export default async function onRequest(context) {
    const { env } = context;
  
    const keys = await env.FORM_DATA.list();
  
    const registrations = [];
    for (const key of keys.keys) {
      const value = await env.FORM_DATA.get(key.name);
      registrations.push(JSON.parse(value));
    }
  
    return new Response(JSON.stringify(registrations), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
  