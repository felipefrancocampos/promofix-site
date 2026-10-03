"use client";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://promofix.com.br/send.php", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (!response.ok) {
        alert("Erro: " + text);
        return;
      }

      alert(text);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Erro de rede. Veja console. Tente mudar protocolo para https");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium text-white">
          Nome <span className="text-red-400">*</span>
        </label>
        <input type="text" id="name" name="name" className="w-full border border-gray-600 bg-white text-black rounded-md px-3 py-2" required />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium text-white">
          Email <span className="text-red-400">*</span>
        </label>
        <input type="email" id="email" name="email" className="w-full border border-gray-600 bg-white text-black rounded-md px-3 py-2" required />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-white">
          Mensagem <span className="text-red-400">*</span>
        </label>
        <textarea id="message" name="message" className="w-full border border-gray-600 bg-white text-black rounded-md px-3 py-2 min-h-[100px]" required />
      </div>

      <div className="flex gap-3">
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md">Enviar</button>
        <button type="reset" className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md">Limpar</button>
      </div>
    </form>
  );
}
