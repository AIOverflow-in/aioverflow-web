import React from "react";
import { clientsContent } from "../../data.js"

function Clients() {
  return (
    <div className="bg-gradient-to-b from-sec  to-prim py-8 space-y-4"  id="clients">
      {/* <h1 className="text-5xl font-bold text-white text-center pb-4">Our Clients</h1> */}
      <div className="flex flex-col mx-auto rounded-xl items-center py-8 bg-white justify-center w-3/4 shadow-xl shadow-prim/40  ">
        <h1 className="text-lg text-prim text-center">
          {clientsContent.title}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 max-w-2xl p-4">
          {clientsContent.listOfClients.map((client) => {
            return (
              <img src={client.logoURL} className="w-32" alt={client.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
