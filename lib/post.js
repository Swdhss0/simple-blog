import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルおデータを摂りだす
export function getPostDatas() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostDatas = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    }
  });

  return allPostDatas;
}
