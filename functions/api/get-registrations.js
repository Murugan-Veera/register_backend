// functions/api/get-registrations.js

export default async function onRequest(context) {
    

    return new Response(JSON.stringify([{ name: 'Test User', email: 'test@example.com' }]), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      
    /*const { env } = context;
  
    try {
      // Fetch all keys in the namespace
      const keys = await env.FORM_DATA.list();
  
      const registrations = [];
      for (const key of keys.keys) {
        const value = await env.FORM_DATA.get(key.name);
        console.log(`Fetched value for key ${key.name}: ${value}`);
        if (value) {
          registrations.push(JSON.parse(value));
        } else {
          console.error(`No value found for key ${key.name}`);
        }
      }
  
      const jsonResponse = JSON.stringify(registrations);
      console.log(`Final JSON response: ${jsonResponse}`);
  
      return new Response(jsonResponse, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      console.error('Error fetching registrations:', error);
      return new Response('Internal Server Error', { status: 500 });
    }*/
  }
  