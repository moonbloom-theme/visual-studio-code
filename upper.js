const fs = require('fs');

// Функция для замены HEX-кодов на верхний регистр
function convertHexToUpper(file) {
  const content = fs.readFileSync(file, 'utf8'); // Чтение содержимого файла
  const updatedContent = content.replace(/#([0-9a-f]{3,8})\b/gi, (match) => match.toUpperCase()); // Замена HEX-кодов
  fs.writeFileSync(file, updatedContent, 'utf8'); // Сохранение обратно в файл
  console.log(`Файл ${file} успешно обработан!`);
}

// Укажите путь к конкретному файлу (любого типа)
const specificFile = './color-schema.js'; // Замените на путь к вашему файлу

// Проверяем, существует ли файл
if (fs.existsSync(specificFile) && fs.lstatSync(specificFile).isFile()) {
  convertHexToUpper(specificFile);
} else {
  console.error(`Файл ${specificFile} не найден или это не файл.`);
}
