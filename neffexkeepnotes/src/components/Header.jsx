import React from "react";

function Header() {
  const logo = (
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d326ba6-1412-40d2-becb-99c74b70e94a/dee9an3-713f2d43-ee7e-444d-ba35-b4eea720a6b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkMzI2YmE2LTE0MTItNDBkMi1iZWNiLTk5Yzc0YjcwZTk0YVwvZGVlOWFuMy03MTNmMmQ0My1lZTdlLTQ0NGQtYmEzNS1iNGVlYTcyMGE2YjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LmFGs-o5MwHoaSkENphORV5dWF4qwtdguGFJ2dQHMCs"
      alt="logo" width={50}
    />
  );
  return (
    <div className="header">
      <div className="header__logo">{logo}</div>
      
    </div>
  );
}

export default Header;
