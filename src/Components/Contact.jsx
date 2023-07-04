import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="containers px-2">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-y-12 bg-gradient-to-r from-primary to-bg p-10 tablet:p-[60px] rounded-md">
          <div>
            <h3 className="text-white text-3xl font-semibold">Hubungi Kami</h3>

            <p className="text-xl text-white mt-4">
              Hubungi kami untuk menanyakan ketersedian property
            </p>
          </div>

          <div>
            <div className="flex justify-center">
              <a
                href=""
                className="bg-primary hover:bg-white/10 text-white py-3 px-5 rounded-lg font-semibold border-4 border-white"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
