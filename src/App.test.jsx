import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import  App  from './App.tsx'

describe('truthy', () => {
    it('true to be true', () => {
        expect(true).toBe(true)
    })

    it('render app', () => {
        render(<App />)
        expect(screen.getByText("暂无数据，请尝试其他搜索条件")).not.toBeNull()

    })
})
