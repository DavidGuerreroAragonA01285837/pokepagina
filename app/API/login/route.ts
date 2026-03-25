import fs, { readFileSync } from "fs";

export async function POST(
    request: Request
){
    const params = await request.json();
    type UserData = {
        [username: string]: {
            password: string;
        }
    };

    let user_data: UserData = {};

    if (fs.existsSync('./public/data/user_data.json')){
        const data = fs.readFileSync('./public/data/user_data.json', "utf-8");
        user_data = JSON.parse(data);
    }
    console.log(params.password);

    let a = false;
    let b = false;

    if (user_data[params.user] != null){
        a = true;
        if (user_data[params.user].password == params.password){
            b = true;
        }
    }
    else{
        console.log("Not found");
    }

    return Response.json({
        user_found: a,
        password_correct: b
    })
}