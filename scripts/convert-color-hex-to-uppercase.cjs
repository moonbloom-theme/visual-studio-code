const fs = require('fs');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}

const specificFile = args[0];

function convertHexToUpper(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');

    const updatedContent = content.replace(/#([0-9a-f]{3,8})\b/gi, (match) =>
      match.toUpperCase()
    );

    fs.writeFileSync(file, updatedContent, 'utf8');

    console.log(`File ${file} has been successfully processed!`);
  } catch (err) {
    console.error(`Error processing file ${file}: ${err.message}`);
    process.exit(1);
  }
}

if (fs.existsSync(specificFile) && fs.lstatSync(specificFile).isFile()) {
  convertHexToUpper(specificFile);
} else {
  console.error(`File ${specificFile} not found or is not a file.`);
  process.exit(1);
}
