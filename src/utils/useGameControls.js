import { useState, useEffect, useRef } from "react";

export function useGameControls() {
    const gameAreaRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [lastPointerPos, setLastPointerPos] = useState({ x: 0, y: 0 });

    // Handle Pointer Drag
    const handlePointerDown = (event) => {
        setDragging(true);
        setLastPointerPos({ x: event.clientX, y: event.clientY });
        event.target.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event) => {
        if (dragging) {
            const dx = event.clientX - lastPointerPos.x;
            const dy = event.clientY - lastPointerPos.y;

            setPosition((prev) => ({
                x: prev.x + dx,
                y: prev.y + dy,
            }));

            setLastPointerPos({ x: event.clientX, y: event.clientY });
        }
    };

    const handlePointerUp = (event) => {
        setDragging(false);
        event.target.releasePointerCapture(event.pointerId);
    };

    // Handle Zooming with Pointer Events
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            setZoom((prevZoom) => {
                let newZoom = prevZoom + event.deltaY * -0.001;
                return Math.min(Math.max(newZoom, 0.5), 2); // Limits zoom between 0.5x and 2x
            });
        };

        const gameArea = gameAreaRef.current;
        if (gameArea) {
            gameArea.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (gameArea) {
                gameArea.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    return {
        gameAreaRef,
        position,
        zoom,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
    };
}
