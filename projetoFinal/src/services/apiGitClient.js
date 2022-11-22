import apiGit from "./apiGit";

export const getUsers = async () => {
    try {
        const { data } = await apiGit.get("/Andre-Toigo")
        const { data : data1 } = await apiGit.get("/FerrazLeandro")
        const { data : data2 } = await apiGit.get("/michelligonzalez")
        const { data : data3 } = await apiGit.get("/nathanfdias")
        const { data : data4 } = await apiGit.get("/RivaniaGomes")
        return [data, data1, data2, data3, data4]
    } catch (e) {
        console.log(e)
    }
}