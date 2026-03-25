import fs, { readFileSync } from "fs";

export async function POST(
    request: Request
){
    const params = await request.json();
    type UserData = {
        [username: string]: {
            password: string;
            name: string;
        }
    };

    let user_data: UserData = {};

    if (fs.existsSync('./public/data/user_data.json')){
        const data = fs.readFileSync('./public/data/user_data.json', "utf-8");
        user_data = JSON.parse(data);
    }
    console.log(params.password);

    let message = "";

    if (user_data[params.user] == null){
        user_data[params.user] = {
            password: params.password,
            name: params.name
        }
        try {
            fs.writeFileSync('./public/data/user_data.json', JSON.stringify(user_data,null, 2));
            message = "User created successfully"
        }
        catch{
            message = "Couldn't create user, server error"
        }
    }
    else{
        message = "User already exists";
    }

    return Response.json({
        message: message
    })
}