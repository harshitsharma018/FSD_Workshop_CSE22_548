import fs from "node:fs/promises";

const filePath = "userData.txt";

async function createFile(content) {
  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log("File created successfully.");
  } catch (err) {
    console.error("Error creating file:", err);
  }
}

async function readFile() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("File content:", data);
    return data;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found. Please create the file first.");
    }
    else {
    console.error("Error reading file:", err);
    }
  }
}