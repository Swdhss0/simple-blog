import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";


const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルデータを摂りだす
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

//pathを取得
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // ]
  return fileNames.map((fileName) => {
    return {
      //あとで、これら(id)がルーティングのパスになる。
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();

  console.log(id);

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  }
}
