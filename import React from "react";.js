import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-6">
      <Card className="max-w-3xl w-full text-center p-6 shadow-lg bg-white rounded-2xl">
        <h1 className="text-4xl font-bold text-pink-600">Anagha & Neeraj</h1>
        <p className="text-lg text-gray-600 mt-2">We're getting married!</p>
        <FaHeart className="text-red-500 text-3xl my-4" />
        <p className="text-gray-700 text-lg">Join us for our special day</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <FaCalendarAlt className="text-pink-600" />
            <span className="text-gray-700 text-lg">May 18, 2025</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-pink-600" />
            <span className="text-gray-700 text-lg">https://maps.app.goo.gl/tYbgw8fQJzzM5aGCA</span>
          </div>
        </div>

        <Button className="mt-6 bg-pink-500 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600">
          RSVP Now
        </Button>
      </Card>
    </div>
  );
}
