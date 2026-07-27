import flet as ft


def main(page: ft.Page):
    page.title = "Spidy AI Assistant"
    page.theme_mode = ft.ThemeMode.DARK
    page.window.width = 1200
    page.window.height = 800
    page.padding = 0
    page.spacing = 0
    page.bgcolor = "#202123"

    # ---------- Top Bar ----------
    top_bar = ft.Container(
        height=60,
        bgcolor="#2B2D31",
        # FIXED: Using correct class-based symmetric padding
        padding=ft.Padding.symmetric(horizontal=20, vertical=0),
        content=ft.Row(
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
            vertical_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Row(
                    controls=[
                        ft.IconButton(
                            icon=ft.Icons.MENU,
                            icon_color="white",
                        ),
                        ft.Text(
                            "AI Assistant",
                            size=22,
                            weight=ft.FontWeight.BOLD,
                            color="white",
                        ),
                    ]
                ),
                ft.Row(
                    controls=[
                        ft.IconButton(icon=ft.Icons.PERSON),
                        ft.IconButton(icon=ft.Icons.DARK_MODE),
                        ft.IconButton(icon=ft.Icons.SETTINGS),
                    ]
                ),
            ],
        ),
    )

    # ---------- Chat Area ----------
    chat_area = ft.Container(
        expand=True,
        bgcolor="#202123",
        
        alignment=ft.Alignment.CENTER,
        content=ft.Column(
            alignment=ft.MainAxisAlignment.CENTER,
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Icon(
                    ft.Icons.SMART_TOY_OUTLINED,
                    size=80,
                    color="#10A37F",
                ),
                ft.Text(
                    "Welcome to AI Assistant",
                    size=30,
                    weight=ft.FontWeight.BOLD,
                    color="white",
                ),
                ft.Text(
                    "Ask me anything...",
                    size=18,
                    color="grey",
                ),
            ],
        ),
    )

    # ---------- Bottom Input ----------
    input_bar = ft.Container(
        padding=15,
        bgcolor="#2B2D31",
        content=ft.Row(
            controls=[
                ft.IconButton(icon=ft.Icons.ATTACH_FILE),
                ft.IconButton(icon=ft.Icons.MIC),
                ft.TextField(
                    hint_text="Type your message...",
                    expand=True,
                    border_radius=30,
                    filled=True,
                    border_color="transparent",
                ),
                ft.IconButton(
                    icon=ft.Icons.SEND,
                    icon_color="#10A37F",
                ),
            ]
        ),
    )

    layout = ft.Column(
        expand=True,
        spacing=0,
        controls=[
            top_bar,
            chat_area,
            input_bar,
        ],
    )

    page.add(layout)


ft.app(target=main)
