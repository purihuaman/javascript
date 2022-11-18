export function form() {
	const htmlForm = `
    <form action="#" id='form' class='form mx-auto'>
      <label class='block mb'>
        Email:
        <input type="email" name='email' id='email' class='form__input' placeholder="example.empresa.com" autofocus />
      </label>

      <label class='block mb'>
        Asunto
        <input type="text" name='subject' id='subject' class='form__input' placeholder="Asunto email" />
      </label>

      <label class='block mb'>
        CC:
        <input type="text" name='cc' id='cc' class='form__input' placeholder="CC" />
      </label>

      <label class='block mb'>
        Mensaje:
        <textarea name='message' id='message' class='form__input' placeholder='Mensaje de email'></textarea>
      </label>

      <div class='flex gap pd-y'>
        <button type='submit' class='boton disabled'>⬆Enviar</button>
        <button type='reset' class='boton'>Limpiar</button>
      </div>
    </form>

    <div id='loading' class='pd-y text-center hidden'>
      <span class="loader"></span>
    </div>
  `;

	return htmlForm;
}
