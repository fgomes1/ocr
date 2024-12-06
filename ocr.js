   // ocr.js
   import dotenv from 'dotenv'; // Importa a biblioteca dotenv
   import { ocr } from "llama-ocr"; // Importa a função ocr da biblioteca

   dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

   async function realizarOCR() {
       try {
           const markdown = await ocr({
               filePath: "./notaLar.jpg", // Caminho para sua imagem
               apiKey: process.env.TOGETHER_API_KEY, // Chave da API do Together AI
           });
           console.log('Texto reconhecido em Markdown:', markdown);
       } catch (erro) {
           console.error('Erro ao processar a imagem:', erro);
       }
   }

   realizarOCR(); // Chama a função para executar o OCR
