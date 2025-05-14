export default async (request, context) => {
    const restrictedCountries = ['BG'];

    const ip =
        request.headers.get("x-nf-client-connection-ip") ||
        request.headers.get("x-forwarded-for")?.split(",")[0] ||
        "0.0.0.0";
    const res = await fetch(`https://ipwho.is/${ip}`);
    const geo = await res.json();

    if (restrictedCountries.includes(geo.country_code)) {
        return Response.redirect(`${request.url}/restricted`, 302);
    }

    return context.next();
};

export const config = {
    path: "/",
};
