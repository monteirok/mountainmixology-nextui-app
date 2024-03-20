export async function GET(request: any, {params}: any) {
    const slug = params.slug
    let response: {ok: boolean, message: string, menus: { id: number, title: string, description: string, category: string, thumbnail: string }[]} = {ok: false, message: 'Invalid Request', menus: []}

    if (slug === 'menus') {
        response = {
            ok: true,
            message: '',
            menus: [
                {"id":1,"title":"Xmas 2023 Menu","description":"A menu from a Xmas party in 2023.","category":"menus","thumbnail":"/images/menus/xmas-menu.png"},
            ]
        }
    }

    return Response.json(response)
}