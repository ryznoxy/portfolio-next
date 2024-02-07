"use client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import ContainerAOS from "../commons/components/elements/ContainerAOS";

export default function Page() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/links", fetcher);

  if (data) {
    return (
      <>
        <ContainerAOS>
          <div>
            <h1>Links</h1>
            <div className="space-y-3">
              {data?.map((link) => (
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link._id}
                  className="flex items-center gap-5 p-2 rounded-xl border hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  <img
                    src={`https://icons.duckduckgo.com/ip3/www.${link.url.slice(
                      8
                    )}.ico`}
                    alt="web-icon"
                    width={50}
                    height={50}
                    className="w-8 h-8"
                  />
                  <h1 className="text-md text-center w-full">{link.title}</h1>
                </Link>
              ))}
            </div>
          </div>
        </ContainerAOS>
      </>
    );
  }
}
