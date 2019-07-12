import Router from "koa-router";
import { Tables } from "../../../models";

export default class Profile {

  static async get() {
    let userid = 1
    let UserT = Tables.User

    let SocialT = Tables.Social

    let PostT = Tables.Post
    let CategoryT = Tables.Category
    let TagT = Tables.Tag
    let Post_TagT = Tables.Post_tag
    let Post_categoryT = Tables.Post_category

    let user = await Profile.createUser()
    let post = await Profile.createPost()

    let auth = await Profile.createAuth()

    let socials = await Profile.createSocials()

    let categorys = await Profile.createCategorys()
    let tags = await Profile.createTags()

    let post_category = await new Post_categoryT().save()

    await tags.forEach(async tag => {
      let post_Tag = await new Post_TagT().save()
      await tag.$add('post_tags', post_Tag)
      await post.$add('post_tags', post_Tag)
    });

    await categorys[0].$add('post_categorys', post_category)
    await post.$add('post_categorys', post_category)

    await user.save()
    await user.$add("auths", auth)
    await user.$set("socials", socials)
    await user.$add("posts", post)
    await user.$set('tags', tags)
    await user.$set('categorys', categorys)


    console.log(`user---------${user}`);
  }


  static async createUser() {
    let UserT = Tables.User
    let user = await new UserT({
      id: 1,
      rights: 'master',
      name: "Ryan",
      nickName: "抓根宝",
      email: "1810022686@qq.com",
      avatar: "/img/pkq.jpeg",
      signature: `种豆南山下，草盛豆苗稀。
      晨兴理荒秽，带月荷锄归。
      道狭草木长，夕露沾我衣。
      衣沾不足惜，但使愿无违。`,
      birthday: '4月20'
    }).save()
    return user
  }


  static async createAuth() {
    let AuthT = Tables.Auth
    let username = await new AuthT({
      type: "username",
      identifier: "hzy",
      credential: "hzy123456"
    }).save()
    return username
  }

  static async createPost() {
    let PostT = Tables.Post
    let post = await new PostT({
      title: 'TypeScript类型定义文件（*.d.ts）生成工具',
      content: "%E5%9C%A8%E5%BC%80%E5%8F%91ts%E6%97%B6%EF%BC%8C%E6%9C%89%E6%97%B6%E4%BC%9A%E9%81%87%E5%88%B0%E6%B2%A1%E6%9C%89d.ts%E6%96%87%E4%BB%B6%E7%9A%84%E5%BA%93%EF%BC%8C%E5%90%8C%E6%97%B6%E5%9C%A8%E8%80%81%E9%A1%B9%E7%9B%AE%E8%BF%81%E7%A7%BB%E5%88%B0ts%E9%A1%B9%E7%9B%AE%E6%97%B6%E4%B9%9F%E4%BC%9A%E9%81%87%E5%88%B0%E4%B8%80%E4%BA%9B%E6%96%87%E4%BB%B6%E9%9C%80%E8%A6%81%E8%87%AA%E5%B7%B1%E7%BC%96%E5%86%99%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%EF%BC%8C%E4%BD%86%E6%98%AF%E5%9C%A8%E9%9C%80%E8%A6%81%E7%9A%84%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E6%AF%94%E8%BE%83%E5%A4%9A%E7%9A%84%E6%83%85%E5%86%B5%EF%BC%8C%E5%B0%B1%E9%9C%80%E8%A6%81%E8%87%AA%E5%8A%A8%E7%94%9F%E4%BA%A7%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E3%80%82%E7%94%A8%E8%BF%87%E5%87%A0%E4%B8%AA%E5%BA%93%E3%80%82%E4%BB%8A%E5%A4%A9%E7%AE%80%E5%8D%95%E8%AE%B0%E5%BD%95%E4%B8%80%E4%B8%8B%E3%80%82%E8%87%AA%E5%B7%B1%E6%80%8E%E4%B9%88%E7%BC%96%E5%86%99%E6%9C%89%E5%BE%88%E5%A4%9A%E6%95%99%E7%A8%8B%E5%92%8C%E6%96%87%E6%A1%A3%EF%BC%8C%E9%82%A3%E9%87%8C%E5%B0%B1%E4%B8%8D%E4%BB%8B%E7%BB%8D%E4%BA%86%E3%80%82%0A%0A####%201%E3%80%81%E4%B8%BA%E6%95%B4%E4%B8%AA%E5%8C%85%E6%B7%BB%E5%8A%A0%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%0A%0A%E4%BD%BF%E7%94%A8%E5%BE%AE%E8%BD%AF%E7%9A%84%5Bdts-gen%5D(https://github.com/Microsoft/dts-gen)%0A%0A%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8%0A%0A%60%60%60%0Anpm%20install%20-g%20dts-gen%20%20%20//%20%E5%85%88%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85dts-gen%0Anpm%20install%20-g%20yargs%20%20%20%20%20//%20%E7%84%B6%E5%90%8E%E5%9C%A8%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E4%BD%A0%E9%9C%80%E8%A6%81%E7%94%9F%E4%BA%A7%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E7%9A%84%E5%BA%93%0Adts-gen%20-m%20yargs%20%20%20%20%20%20%20%20%20//%20%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A4%E7%94%9F%E6%88%90%E6%96%87%E4%BB%B6%0A%60%60%60%0A%0A%E5%9C%A8%E4%BD%A0%E6%89%A7%E8%A1%8C%E7%9A%84%E6%96%87%E4%BB%B6%E7%9A%84%E8%B7%AF%E5%BE%84%E4%B8%8B%EF%BC%88%E4%B8%80%E8%88%AC%E6%98%AF%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%A0%B9%E7%9B%AE%E5%BD%95%EF%BC%89%E7%94%9F%E6%88%90%E4%BA%86yargs.d.ts%0A%0A%E5%85%B6%E4%BB%96%E5%8F%82%E6%95%B0%E5%92%8C%E5%8A%9F%E8%83%BD%E8%87%AA%E8%A1%8C%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3%0A%0A####%202%E3%80%81%E4%B8%BA%E5%8D%95%E4%B8%AA%E6%96%87%E4%BB%B6%E7%94%9F%E4%BA%A7%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%0A%0A%E4%BD%BF%E7%94%A8%5Bdtsmake%5D(https://github.com/ConquestArrow/dtsmake)%0A%0A%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8%0A%0A%60%60%60%0Anpm%20i%20dtsmake%20-g%20%20%20//%20%E5%85%88%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85dtsmake%0A%0Adtsmake%20-s%20./path/to/sourcefile.js%20%20//%20%E5%9C%A8%E5%AF%B9%E5%BA%94%E7%9A%84%E6%96%87%E4%BB%B6%E7%94%9F%E4%BA%A7%E6%96%87%E4%BB%B6%0A%60%60%60%0A%0A%E8%AF%B4%E6%98%8E%EF%BC%9A%0A%0A-%20%E7%94%9F%E6%88%90%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%80%E8%88%AC%E9%83%BD%E4%BC%9A%E6%9C%89%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98%EF%BC%8C%E9%9C%80%E8%A6%81%E8%87%AA%E5%B7%B1%E7%A8%8D%E5%BE%AE%E4%BF%AE%E6%94%B9%E4%B8%80%E4%B8%8B%EF%BC%8C%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%83%B3%E5%86%99%E7%B1%BB%E5%9E%8B%E7%9B%B4%E6%8E%A5%E7%94%A8any%0A-%20%E6%89%A7%E8%A1%8C%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E8%83%BD%E4%BC%9A%E6%8A%A5%E9%94%99tern%E6%B2%A1%E6%9C%89%E6%8C%89%E8%A3%85%EF%BC%8C%E5%B0%B1%E9%9C%80%E8%A6%81%E5%9C%A8%E5%AE%89%E8%A3%85%E4%B8%80%E4%B8%8B,%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%20npm%20i%20tern%20--save-dev%0A%0A%E5%85%B6%E4%BB%96%E5%8F%82%E6%95%B0%E5%92%8C%E5%8A%9F%E8%83%BD%E8%87%AA%E8%A1%8C%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3%0A%0A####%20%E5%85%B6%E4%BB%96%0A%0A-%20%5Bdtsgenerator%5D(https://github.com/horiuchi/dtsgenerator)%20-%20d.ts%20file%20generator%20tool,%20for%20only%20JSON%20Schema%20files.%0A-%20%5Bjs2tsd%5D(https://github.com/mhelvens/js2tsd)%20-%20d.ts%20file%20generator%20tool,%20no%20type%20inferrence.%0A-%20%5BJS2TSD%5D(http://nekok.com/)%20d.ts%20file%20generator%20GUI%20tool%20app.%20Not%20CLI.",
      digest: "在开发ts时，有时会遇到没有d.ts文件的库，同时在老项目迁移到ts项目时也会遇到一些文件需要自己编写声明文件，但是在需要的声明文件比较多的情况，就需要自动生产声明文件。"
    }).save()
    return post
  }

  static async createSocials() {
    let SocialT = Tables.Social
    let git = await new SocialT({
      name: "git",
      alias: "git",
      icon: "fa fa-github",
      link: "https://github.com/Ryanhz",
      des: ""
    }).save()

    let email = await new SocialT({
      name: "email",
      alias: "email",
      icon: "fa  fa-envelope",
      link: "mailto:1810022686@qq.com",
      des: ""
    }).save()
    return [git, email]
  }

  static async createTags() {
    let TagT = Tables.Tag
    let ts_tag = await new TagT({
      name: "TypeScript",
      alias: "ts",
      des: "TypeScript...."
    }).save()

    let js_tag = await new TagT({
      name: "JavaScript",
      alias: "js",
      des: "JavaScript...."
    }).save()

    let node_tag = await new TagT({
      name: "Node.js",
      alias: "nodejs",
      des: "Node.js 就是运行在服务端的 JavaScript。"
    }).save()

    let ts_tag2 = await new TagT({
      name: "TypeScript2",
      alias: "ts",
      des: "TypeScript...."
    }).save()

    let js_tag2 = await new TagT({
      name: "JavaScript2",
      alias: "js",
      des: "JavaScript...."
    }).save()

    let node_tag2 = await new TagT({
      name: "Node.js2",
      alias: "nodejs",
      des: "Node.js 就是运行在服务端的 JavaScript。"
    }).save()
    return [ts_tag, js_tag, node_tag, ts_tag2, js_tag2, node_tag2]
  }

  static async createCategorys() {
    let CategoryT = Tables.Category
    let coding = await new CategoryT({
      name: 'coding',
      des: 'coding',
      alias: 'coding'
    }).save()


    let living = await new CategoryT({
      name: 'living',
      des: 'living',
      alias: 'living'
    }).save()

    return [coding, living]
  }
}
