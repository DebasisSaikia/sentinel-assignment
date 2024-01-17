import { ROUTES } from "@/routes";
import { Metadata } from "next";

type PageMetadata = {
    [K in keyof typeof ROUTES]?: Metadata;
};

const commonDescription =
    "Browse your favorite websites safely from anywhere in the world by using the Sentinel dVPN app";

export const METADATA: PageMetadata = {
    home: {
        title: "Sentinel",
        description: commonDescription,
    },
};
