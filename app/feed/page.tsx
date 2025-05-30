"use client"
import Post from "@/components/block/post";
import { SearchModal } from "@/components/block/searchModal";
import { getAllPost } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";


function FeedPage() {
  const ITEMS_PER_LOAD = 5;
  const [visibleItems, setVisibleItems] = useState<{ id: string; title: string; content: string; category:string ; createdAt: string; author: { name: string; } }[]>([]);
  const [page, setPage] = useState(1);
  const [demoFeed, setDemoFeed] = useState<{ id: string; title: string; content: string; category:string ; createdAt: string; author: { name: string; } }[]>([]);

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "React", "Next.js", "TypeScript"];


  const { ref, inView } = useInView();

  // Fetch feed data
  useEffect(() => {
    const fetchFeed = async () => {
      const data = await getAllPost();
      setDemoFeed(data);
      console.log("Demo Feed Data:", data);
    };
    fetchFeed();
  }, []);

  useEffect(() => {
    const updateVisibleItems = () => {
      const filtered = demoFeed.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      const nextItems = filtered.slice(0, page * ITEMS_PER_LOAD);
      setVisibleItems(nextItems);
    };

    updateVisibleItems();
  }, [searchTerm, selectedCategory, demoFeed, page]);

  useEffect(() => {
    if (inView && visibleItems.length < demoFeed.length) {
      setPage((prev) => prev + 1);
    }
  }, [inView, visibleItems.length, demoFeed.length]);




  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6"> Feed</h1>
      {/* <SearchModal data={demoFeed}/> */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="mt-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-6 gap-3">

        <div className="mt-4">

          <ul className="space-y-2">
            {visibleItems.map((item) => (
              <li key={item.id} className="p-2 border border-gray-300 rounded">
                <Post post={item} />
              </li>
            ))}
          </ul>


        </div>


      </div>



      {/* Observer Target */}
      {visibleItems.length < demoFeed.length && (
        <div ref={ref} className="text-center mt-6">
          <p className="text-gray-500">Loading more content...</p>
        </div>
      )}

      {/* All items loaded */}
      {visibleItems.length >= demoFeed.length && (
        <p className="text-center text-gray-400 mt-6">🎉 You’re all caught up!</p>
      )}
    </div>
  );
}

export default FeedPage;
